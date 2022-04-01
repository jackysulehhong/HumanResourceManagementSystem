// Require multer for image uploading and multers3 to upload directly to s3
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configure aws s3 SDK (update authentication)
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

// Unique name of aws s3 bucket created
const myBucket = 'intihrmsbucket';

// Multer upload (Use multer-s3 to save directly to AWS instead of locally)
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    // Set public read permissions
    ACL: 'public-read',
    // Auto detect contet type
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    // Set key/ filename as original uploaded name
    key: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
      );
    },
  }),
});

module.exports = upload;
