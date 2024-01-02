import ChoseType from '@/components/ChoseType'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  const headerText = "Doktor bul, randevu al,"
  const headerText2 = "online,"
  const headerText3 ="görüşme yap!"

  const typeText1 = "Online Görüşme"
  const typeText2="Yüz Yüze Randevu"

  const searchPlaceholder = "Doktor ve branş arayın..."
  return (
    <>
    <Header headerText={headerText} headerText2={headerText2} headerText3={headerText3} />
    <ChoseType typeText1={typeText1} typeText2={typeText2} searchPlaceholder={searchPlaceholder} />
    </>
  )
}
