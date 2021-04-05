const { default: Axios } = require("axios");
const { ApiConfig } = require("./constant");

class ApiCall {
  static async uploadWAV(wavFile) {
    const response = await Axios.post(
      ApiConfig.baseUrl + "upload",
      wavFile
    );
    return response;
  }

  static async getWav(url) {
    const response = await Axios.get(
      url
    );
    return response;
  }

}
export default ApiCall;
