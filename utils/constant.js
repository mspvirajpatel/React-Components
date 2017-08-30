import React, { Component } from 'react';
export const Color = {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    PRIMARY: "#FC8800",
    PRIMARY_DARK: "#879eb0",
    BG_COLOR: "#FFFFFF",
    APPBACKGROUND: "#002642",
    BOX: "#004E89",
    HOMETOPBAR: '#176EB5',
    TextColor : '#9F9F9F',
};

export const AppSizes = {
    corner: 5,
};

export const AppText = {
    //AccountCreateView
    acWelcome : 'Welcome to the Give Back Campaign, User!',
    acWelcome2 : 'A confirmation email has been sent to your adderess for verification.',
    acWelcome3 : 'Please click the link provided to verify.',
    acbtnContinue : 'Continue',

    //BottomBar
    bbAbout : 'About',
    bbContact: 'Contact',
    bbHelp : 'Help ',

    //CountrySelectView
    cstxt : 'Select Country',

    //Forgot
    fvlbl : 'Forgot Password',

    //HomeTopbar
    htwelcome : 'Welcome back, ',

    //Login
    loginUserplaceholder : 'Username',
    loginPassplaceholder : 'Password',
    btnlogin : 'Login',
    btnSignUp : 'Sign Up',
    btnForgot : 'Forgot Password?',

    //PasswordRestView
    prlbl : 'Password Reset!',
    prlbl2 : 'An email has been sent to ',
    prlbl3 : 'Follow the steps to reset your password.',
    prbtnContinue : 'Continue',

    //SignUpView
    signUpFirst : 'First Name',
    signUpLast : 'Last Name',
    signUpEmail : 'Email Address',
    signUpPWD : 'Password',
    signUpVerifyPWD : 'Verify Password',
    signUpTermsText : 'By creating your account you agree to some terms service and stuff..',
    signUpCreate : 'Create Account',
    signUpCancel : 'Cancel',

    //HomeView
    homebtnSearch: 'Search Businesses',
    homebtnOnline: 'Online Shopping',
    homebtnLocal: 'Search Local Businesses',
    homebtnDeals: 'Hot Deals',
    homebtnNews: 'News',
    homebtnMyProfile: 'MyProfile',
    homebtnLogout: 'Logout',

    //ProfileView
    pvmyDetails:'My Details',
    pvMyTranstion:'My Transactions',
    pvSpreadWord:'Spread The Word',
    pvSupporting:"I'm Supporting",
    pvFollowing:"I'm Following",
    pvHome:'Home',

    //Validations
    validationEmail : 'Not Valid Email',
    validationPassword : 'Not Valid Password',

    //ContactUs
    cutxt: 'The Give Back Campaign Aust',
    cutxt2:'The Give Back Campaign New Zealand',
    cutxt3: 'The Give Back Campaign USA',

    //Other

    btnShopNow : 'Shop Now',

    //Page Title
    titleAbout :'About',
    titleContact : 'Contact Us',
    titleHelp : 'Help',
};

export const NavigationToolbar = {
    headerTitleStyle: {
        /* */
        color: '#ffffff'
    },
    headerStyle: {
        /* */
        backgroundColor: '#000000'
    },
    headerTintColor: {
        /* */
    },
    // drawerIcon: ({ tintColor }) => (
    //     <Image
    //         source={require('../../images/logo.png')}
    //         style={[{width : 20},{height : 20},{tintColor: tintColor}]}
    //     />
    // ),

    // headerLeft: <Button onPress={() => this.props.navigation.navigate('Profile')}>
    //
    // </Button>


};
