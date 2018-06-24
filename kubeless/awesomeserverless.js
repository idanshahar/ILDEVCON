module.exports = {
  handler: (event, context) => {
    console.log(event);
    return "Kubernetes Serverless is awesome!";
  },
};
