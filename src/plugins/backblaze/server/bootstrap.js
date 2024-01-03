'use strict';
module.exports = ({ strapi }) => {
  // bootstrap phase
  strapi.db.lifecycles.subscribe({
    models: ['plugin::upload.file'],

    // your lifecycle hooks

    //
    async beforeCreate(event) {
      const { params } = event;
      if(!!strapi.config.get('plugin.upload.providerOptions.baseUrl')){
        params.data.url="https://"+strapi.config.get('plugin.upload.providerOptions.baseUrl')+'/'+params.data.hash+params.data.ext
        if(!!params.data.formats){
          if(!!params.data.formats.thumbnail){
            params.data.formats.thumbnail.url="https://"+strapi.config.get('plugin.upload.providerOptions.baseUrl')+'/'+params.data.formats.thumbnail.hash+params.data.formats.thumbnail.ext
          }
          if(!!params.data.formats.large){
            params.data.formats.large.url="https://"+strapi.config.get('plugin.upload.providerOptions.baseUrl')+'/'+params.data.formats.large.hash+params.data.formats.large.ext
          }
          if(!!params.data.formats.medium){
            params.data.formats.medium.url="https://"+strapi.config.get('plugin.upload.providerOptions.baseUrl')+'/'+params.data.formats.medium.hash+params.data.formats.medium.ext
          }
          if(!!params.data.formats.small){
            params.data.formats.small.url="https://"+strapi.config.get('plugin.upload.providerOptions.baseUrl')+'/'+params.data.formats.small.hash+params.data.formats.small.ext
          }
        }
      }
    },
  }),
};