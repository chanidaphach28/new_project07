import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'AKIAIOSFODNN7EXAMPLE',
  secretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
});

app.get('./pic/:condo1', async (req, res) => {
  const objectKey = req.params.objectKey
  const bucketName = 'test1'
  const expiration = 60 * 5 // URL valid for 5 minutes (adjust as needed)

  try {
    
    const presignedUrl = await minioClient.presignedGetObject(bucketName, objectKey, expiration);

    // Send the presigned URL back to the user
    res.send({ url: presignedUrl })
  } catch (err) {
    console.error('Error generating presigned URL:', err);
    res.status(500).send('Error generating presigned URL');
  };