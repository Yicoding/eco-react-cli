'use strict';

const regProject = /^[a-z0-9]+(\-[a-z0-9]+)*$/;

const REGISTRY_XNPM = 'https://registry.npmjs.org';


const extraDir = ['node_modules', 'build', 'dist', '.git', 'dist-publish', 'es', 'lib'];

module.exports = {
  regProject,
  REGISTRY_XNPM,
  extraDir
};
