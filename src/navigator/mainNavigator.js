import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList112152Navigator from '../features/ArticleList112152/navigator';
import ArticleList112151Navigator from '../features/ArticleList112151/navigator';
import ArticleList112150Navigator from '../features/ArticleList112150/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList112152: { screen: ArticleList112152Navigator },
ArticleList112151: { screen: ArticleList112151Navigator },
ArticleList112150: { screen: ArticleList112150Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
