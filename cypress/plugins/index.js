/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium') {
      // Mac/Linux
      launchOptions.args.push(
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--use-file-for-fake-video-capture=cypress/fixtures/akiyo_qcif.y4m'
        // '--use-file-for-fake-video-capture=cypress/fixtures/sample_640x360.mpeg'
        // '--use-file-for-fake-video-capture=cypress/fixtures/sample-5s.mp4'
      )

      // Windows
      // launchOptions.args.push('--use-file-for-fake-video-capture=c:\\path\\to\\video\\my-video.y4m')
    }

    return launchOptions
  })
}
