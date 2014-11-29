module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: process.env,
        aws_s3:{
          options: {
            accessKeyId: '<%= config.PYRO_DEV_S3_KEY %>',
            secretAccessKey: '<%= config.PYRO_DEV_S3_SECRET %>',
            bucket:'pyro-cdn',
            uploadConcurrency: 5, // 5 simultaneous uploads
          },
          cdn:{
            files:[{'action': 'upload', expand: true, cwd: 'www/', src: ['**'], dest: 'seed'}]
          }
        }
    });

    // S3 File Handling Plugin (For uploading build)
    grunt.loadNpmTasks('grunt-aws-s3');

    // Default task
    grunt.registerTask('default', ['aws_s3:cdn']);
};