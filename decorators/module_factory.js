import Registry from '../registry/registry';

/**
 * @ModuleFactory() decorator
 * Used for defining a root module of the system
 * and also declare and import dependencies injected into the system.
 */
export default function ModuleFactory(metadata) {
  /* eslint-disable */
  return function (targetClass) {
    Registry.registerModuleFactory(targetClass, metadata);
    return targetClass;
  };
}
