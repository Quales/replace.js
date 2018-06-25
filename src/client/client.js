const os = require('os');
const Constants = require('../util/Constants');
var request = require('ajax-request');

function JSONize(str) {
  return str
    // wrap keys without quote with valid double quote
    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'})    
    // replacing single quote wrapped ones to double quote 
    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})         
}

function getJSON(iJSON){
  return JSON.parse(iJSON) 
}

class Client{
  /**
   * @param {ClientOptions} [options] Options for the client
   */
  constructor(token) {
    this.token = token || null;
    this.address = Constants.address.http.host;
    this.port = Constants.address.http.port;
  
  }

  addMsg(msg, cb) {
    if (!this.token) throw new Error("No Token");
    var i = this.address+":"+this.port+"/api/user/"+msg.author.id+".json/addMsg/";
    request({
      url: i,
      method: 'GET',
      headers: {
        authorization: this.token,
        msgid: msg.id,
        msgauthor: msg.author.id,
        authorn: msg.author.tag
      }
    }, function(err, res, body) {
      if (err) {throw new Error(err)}
      var result = getJSON(body);
      if(cb) cb(result)
    });
  }

  get(id, cb) {
    if (!this.token) throw new Error("No Token");
    var i = this.address+":"+this.port+"/api/user/"+id+".json";
    request({
      url: i,
      method: 'GET',
      headers: {
        authorization: this.token
      }
    }, function(err, res, body) {
      if (err) {return err;}
      var result = getJSON(body);
      if (cb) cb(result)
    });
  } 
}

module.exports = Client;