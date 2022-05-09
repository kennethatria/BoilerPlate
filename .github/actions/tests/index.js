const core = require('@actions/core');
const github = require('@actions/github');

try {

    function extractEmail(text){
        let email = 'Invalid or no email provided'
        const text_body = text.match(/^(email: )(?<email>.*)$/m)
        if (text_body?.groups?.email === undefined || text_body?.groups?.email === '') {
          return false
        } else {
          email = text_body.groups.email.trim()
        }
        if(validateEmail(email)){
            return email
          }else{
            return false
          }
    }
    
    function extractIP(text){
        let ip = 'Invalid or no ip provided'
        const text_body = text.match(/^(ip: )(?<ip>.*)$/m)
        if (text_body?.groups?.ip === undefined || text_body?.groups?.ip === '') {
          return false
        } else {
          ip = text_body.groups.ip.trim()
        }
        if(ValidateIPaddress(ip)){
          return ip
        }else{
          return false
        }
    }
      
      function ValidateIPaddress(ipaddress) {  
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
          return true 
        }
      } 
      
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      
  // `who-to-greet` input defined in action metadata file
  /*const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time); */
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context, undefined, 2);
  console.log(github.context.payload.issue.number);
  user_ip = extractIP(github.context.payload.issue.body)
  user_email = extractEmail(github.context.payload.issue.body)
  console.log(user_email, user_ip);
  console.log(github.context.payload.issue.body);
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

