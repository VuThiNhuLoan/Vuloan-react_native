import React,{Component} from 'react';
import{
  Text, View, StyleSheet,ListView,TouchableOpacity,StatusBar,
}from 'react-native';
var MENU=[
  {name:'Tin Tức'},
  {name:'Hỏi Đáp'},
  {name:'Nhật Ký'},
]
class Home extends Component {
  constructor(props) {
    super(props);
    var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
    this.state={
      dataSource:ds.cloneWithRows(MENU),
      hidden:true

    };
    this._pushView=this._pushView.bind(this);
    this.taoHang=this.taoHang.bind(this);
  }
  taoHang(property){
    return(
      <TouchableOpacity style={styles.hang}onPress={()=>this._pushView(property.name)}>
        <View style={styles.title}>
          <Text style={styles.text} >{property.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  _pushView(menuName){
    // if (menuName=="Tin Tức") {
    //   this.props.navigator.push({
    //     name:'component',
    //     component:require('./TinTuc'),
    //     props:{title:menuName}
    //   })
    // }
    // if (menuName=="Hỏi Đáp") {
    //   this.props.navigator.push({
    //     name:'component',
    //     component:require('./HoiDap'),
    //     props:{title:menuName}
    //   })
    // }
    // if (menuName=="Nhật Ký") {
    //   this.props.navigator.push({
    //     name:'component',
    //     component:require('./NhatKy'),
    //     props:{title:menuName}
    //   })
    // }
  }
  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={this.state.hidden}/>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cencer</Text>
        </View>
        <View style={styles.danhsach}>
          <ListView dataSource={this.state.dataSource}
                renderRow={this.taoHang}/>
        </View>
      </View>
    );
  }
}
var styles=StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  },
  headerText:{
    color:'white',
    fontSize:20,
    fontWeight:'400'
  },
  danhsach:{
    flex:10,
    backgroundColor:'white'
  },
  hang:{
    flexDirection:'row',
    flex:1,
    padding:10,
    borderBottomWidth:1,
    borderColor:'green'
  },
  text:{
    fontSize:18,
    fontWeight:'300'
  },

})
