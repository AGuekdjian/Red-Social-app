require("dotenv").config({ path: ".env" })
const AWS = require("aws-sdk")

const ID = process.env.AWS_ID
const SECRET = process.env.AWS_SECRET
const BUCKET_NAME = process.env.AWS_BUCKET_NAME

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
})