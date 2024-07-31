module.exports = {
  apps: [{
    name: "restapi",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
    }
  }]
}