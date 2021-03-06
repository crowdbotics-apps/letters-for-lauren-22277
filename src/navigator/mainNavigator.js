import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList167398Navigator from '../features/ArticleList167398/navigator';
import ArticleList167397Navigator from '../features/ArticleList167397/navigator';
import ArticleList167396Navigator from '../features/ArticleList167396/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList167398: { screen: ArticleList167398Navigator },
ArticleList167397: { screen: ArticleList167397Navigator },
ArticleList167396: { screen: ArticleList167396Navigator },

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
