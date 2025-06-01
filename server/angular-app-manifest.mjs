
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/achievements"
  },
  {
    "renderMode": 2,
    "route": "/courses"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/publications"
  },
  {
    "renderMode": 2,
    "route": "/qualifications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8978, hash: '794121e759ab5142a262e27d12205aa4eef9185f06267748d14a0630516db8b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: 'ecc9d44ced7d081b65d373e694efb54dddf6d4026a6d9c191300d0ef5ad8ea4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'achievements/index.html': {size: 39256, hash: 'a678ec594864d91a47c73588f38798b7af6f301fa6ac0b035a647a2b61606137', text: () => import('./assets-chunks/achievements_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31507, hash: '666fcbee7f61cfca14b16b3e794b539d4cd878f6a55ce0a56b942004b7522012', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'publications/index.html': {size: 25970, hash: '6a44c2a4acebc7f69bf033dc51811a248a309518ac2176fde63794c8879c8281', text: () => import('./assets-chunks/publications_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 43533, hash: '9128d914bd7ae724fd49cf8a8596cf179124fbd8263e9a787f21c5dce6c91c81', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'qualifications/index.html': {size: 36278, hash: '69c5fc1f23ad7be1ba392e51e53c3ba108aa2d14bae84c4092546a8b24b22e16', text: () => import('./assets-chunks/qualifications_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 32176, hash: '96867d17dc56cdeab1c5d38994fd77f82309ef200c1137083e408cd3fb63cb05', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-SED5I3HV.css': {size: 184986, hash: 'x7/1IPMhTZU', text: () => import('./assets-chunks/styles-SED5I3HV_css.mjs').then(m => m.default)}
  },
};
