const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dfchd9a6w",
  api_key: "867756147935362",
  api_secret: "Onkj7LgI9JHlCG2iSDgWwYy7c2I",
});

// CLOUD_NAME = richdotcom;
//  API_KEY = "867756147935362";
//  API_SECRET = Onkj7LgI9JHlCG2iSDgWwYy7c2I ;

const cloudinaryUploadingImg = async (fileToUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUploads, (result) => {
      console.log(result);
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

//cloudinaryDeleteImg
const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      console.log(result);
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = { cloudinaryUploadingImg, cloudinaryDeleteImg };
