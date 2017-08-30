# React-Components

-Button for Icon & Text Added
-Loading indicates( Multiple Choice)
-Internet Connection Check(OfflineBar)
-ProgressView for API Call
-RippleButton For Material Design Button
-SearchBar for Search 
-TextView (iOS & android Same UI) ( Fix issue with bottom line in Android)
-ToastView for toast


//Button
<ButtonsWithIcons styles={{width: 90,height: 90}} onPress={this.onList}>

 <Image source={home} style={{width: 60,height: 60}} />
 
 <Text style={{
        fontSize: 10,
        color: "#ffffff",
        marginLeft:8,
        marginRight:8,
        alignItems: 'center',
        textAlign: 'center',
    }}>{AppText.homebtnSearch}</Text>
    
</ButtonsWithIcons>


//Loading indicates(
<BallIndicator color={"#ffffff"} style={{marginBottom:20}} />
<BarIndicator color={"#ffffff"} style={{marginBottom:20}} />
<MaterialIndicator color={"#ffffff"} style={{marginBottom:20}} />
<DotIndicator color={"#ffffff"} style={{marginBottom:20}} />
<PacmanIndicator color={"#ffffff"} style={{marginBottom:20}} />
<PulseIndicator color={"#ffffff"} style={{marginBottom:20}} />
<SkypeIndicator color={"#ffffff"} style={{marginBottom:20}} />
<UIActivityIndicator color={"#ffffff"} style={{marginBottom:20}} />
<WaveIndicator color={"#ffffff"} style={{marginBottom:20}} />


-Internet Connection Check(OfflineBar)

<OfflineBar ref={(r) => this.offlineBarRef = r} />


//SearchBar for Search 

<SearchBarView onSearchChange={() => console.log('On Search Change')}
                                   height={50}
                                   onFocus={() => console.log('On Focus')}
                                   onBlur={() => console.log('On Blur')}
                                   placeholder={'Search...'}
                                   autoCorrect={false}
                                   padding={5}
                                   returnKeyType={'search'} />

// TextView (iOS & android Same UI) ( Fix issue with bottom line in Android)
<TextInputBox keyboardType="email-address"
                                      placeholder={AppText.loginUserplaceholder}
                                      onChangeText={(text) => this.setState({username: text})}
                                      _onDelTextHandle={() => this.setState({username: ''})}
                                      value={this.state.username}/>
                                      
