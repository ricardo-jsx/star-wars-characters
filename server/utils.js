function getIdFromObj(obj) {
  return obj.id || Number(obj.url.split('/').slice(-2, -1)[0]);
}

module.exports = {
  getIdFromObj,
};
