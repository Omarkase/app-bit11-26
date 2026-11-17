//นำเข้า  ข้อความ    วิว   จาก   ชื่อไลบรารี่
import { Image, StyleSheet, Text, View } from 'react-native';

//ส่งออก เริ่มต้น   ฟังชั่น    ชื่อฟังชั่น
export default function App() {
  return (
    <View style={homeStyle.container}>

      {/* ใส่ภาพจากไฟล์ */}
      <Image
        source={require('@/assets/6911672183608.jpg')}
        style={{
          width: 200, // กว่้าง
          height: 200, // สูง
          borderRadius: 100, // มุมโค้ง
          borderWidth: 6, // ขอบหนา
          borderColor: "black",  // สีขอบ
        }}
      />
      <Text style={homeStyle.title}>ณัฐภัทร แช่มพุดซา</Text>
      <Text style={homeStyle.title2}>แสกกลางยังโดนเท ปัดเป๋จะเหลืออะไร</Text>
      
      <View style={{ backgroundColor:  "lightgray", padding:20, borderRadius:20, gap:5, marginTop:10}}>
        <Text>ห้อง BIT.1/1 เลขที่ 26</Text>
        <Text>Email: nattapat.champudza@e-tech.ac.th</Text>
        <Text>Phone: 0617705125</Text>
      </View>
      
      <Text style={homeStyle.title3}>ภาพกิจกรรม</Text>

      <View style={{ flexDirection: "row"}}>
        <Image style={{width:100,height:100,marginRight:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdNju1TzUY70skYOLb4xg4iXOMKan1rVifcy3BGWtW7kTr4I29y12M5fP&s=10"}}></Image>
        <Image style={{width:100,height:100,marginRight:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQDq1W4YIYZ8H-rYfPtbXRdNyuk1UMDNhOgZapANafj6Y8NvvOFaDkI8&s=10"}}></Image>
        <Image style={{width:100,height:100,marginRight:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRaz4Q09p5GzrYq5uJoIfWh-uJZeDvRzm6eVrH70RSQ&s=10"}}></Image>
      </View>

    </View> 
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container: {
    backgroundColor: "white", // สีพื้นหลัง
    flex: 1, //ขยายเต็มที่
    padding: 20, // ระยะห่างขอบ
    alignItems: "center"
  },
  title: {
    color: "black", // สีอักษร
    fontSize: 20, // ขนาดเล็ก
    fontWeight: 500, // ความหนาอักษร 100-900
    textAlign: "center", //จัดแนวการวาง
  },
  title2: {
    color: "grey", // สีอักษร
    fontSize: 10, // ขนาดเล็ก
    fontWeight: 200, // ความหนาอักษร 100-900
    textAlign: "center", //จัดแนวการวาง
  },
  title3: {
    color: "black", // สีอักษร
    fontSize: 15, // ขนาดเล็ก
    fontWeight: 500, // ความหนาอักษร 100-900
    width: "100%",
    textAlign: "left",
    marginTop: 20,
    marginBottom:20,
  },
})