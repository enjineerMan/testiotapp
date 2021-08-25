const AWSIoTData = require("aws-iot-device-sdk");
var credUrl = "https://2zcr7s8gx1.execute-api.us-east-1.amazonaws.com/dev";
var cred={};
async function getCred(){
  const dataResponse = await fetch(credUrl);
  const dataBody = await dataResponse.json();
  cred = dataBody;
}
getCred();

const publish = function(payload) {
  if (Object.keys(cred).length !== 0){
    const mqttClient = AWSIoTData.device({
      region: "us-east-1",
      host: "a39r45bm2gljn0-ats.iot.us-east-1.amazonaws.com",
      clientId: "basicPubSub",
      protocol: "wss",
      maximumReconnectTimeMs: 8000,
      debug: false,
      accessKeyId: String(cred.AccessKeyId),
      secretKey: String(cred.SecretAccessKey),
      sessionToken: String(cred.SessionToken),
    });
    mqttClient.on("connect", () => {
      console.log("mqttClient connected");
    });
    console.log(cred);
    console.log(payload);
    mqttClient.publish("testtopic", payload);
  }
}

export default publish;