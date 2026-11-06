//นำเข้า  ข้อความ  วิว              จาก   ชื่อไลบรารี่
import {StyleSheet, Text, View, Image} from 'react-native';

//ส่งออก เริ่มต้น   ฟังชั่น    ชื่อฟังชั่น
export default function App() {
  return(
    <View style={homeStyle.container}>
      <Text style={homeStyle.title}>Nattapat</Text>

      {/* ใส่ภาพจากไฟล์ */}
      <Image 
      source={require('@/assets/bdthe40.jpeg')}
      style={{
        width: 400, // กว่้าง
        height: 400, // สูง
        borderRadius: 200, // มุมโค้ง
        borderWidth: 6, // ขอบหนา
        borderColor: "black",  // สีขอบ
      }}
      />
      {/* ใส่รูปจากเว็ป */}
      <Image
      source={{uri:"https://quiz.postjung.com/data/36/36447.image1.jpg"}}>
        style={{
          width: 200, // กว้าง
          height: 200, // สูง
          
        }}
      
    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle =  StyleSheet.create({
  container:{
    backgroundColor: "orange", // สีพื้นหลัง
    flex:1, //ขยายเต็มที่
    alignItems: "center"
  },
  title:{
    color: "white", // สีอักษร
    fontSize: 32, // ขนาดเล็ก
    fontWeight: 500, // ความหนาอักษร 100-900
    fontStyle: "italic" , // เอียง
    textAlign: "center"
  }
})