module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {},
      sizeLimit: 10 * 1024 * 1024, // 10MB in bytes
      fileTypes: {
        images: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        files: ['pdf', 'doc', 'docx'],
        videos: ['mp4']
      }
    }
  }
});