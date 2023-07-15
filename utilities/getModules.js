// This path /PropertyShowCase -> should have lowercase c in 'case', but when pushing to prod, module cannot be found. during dev hot refresh will not work for this module :)
import MainHero from "@/pages/components/MainHero/index";

const getModules = ({ __component, ...rest }, index) => {
  let Module;

  switch (__component) {
    case "react.main-hero":
      Module = MainHero;
      break;
    // case "react.secondary-hero-module":
    //   Module = SecondaryHero;
    //   break;
    // case "react.contact-form":
    //   Module = ContactForm;
    //   break;
    // case "react.property-feed-module":
    //   Module = PropertyFeed;
    //   break;
    default:
      console.log(
        `sorry, no file exists in the code base for strapi module: ${__component}`
      );
  }

  return Module ? <Module key={`Module-${index}`} {...rest} /> : null;
};

const ModuleManager = ({ modules, propertiesData }) => {
  return (
    <div>
      {modules.map((module, index) =>
        getModules(module, index, propertiesData)
      )}
    </div>
  );
};

ModuleManager.defaultProps = {
  blocks: [],
};

export default ModuleManager;
