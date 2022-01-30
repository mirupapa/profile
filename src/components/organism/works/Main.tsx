import AreaTitle from 'components/atom/AreaTitle'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Label from 'components/atom/Label'

const Wrapper = styled.div`
  height: 800px;
  padding-top: 120px;
`
const Contents = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 50px 30px;
`
const Typography = styled.div`
  width: 500px;
`
const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  padding-bottom: 30px;
`

const Main: React.FC = () => {
  return (
    <Wrapper>
      <AreaTitle mainTitle="WORKS" subTitle="制作実績など" />
      <Contents>
        <Image
          src="/sampleMyDiary.png"
          layout="fixed"
          width={300}
          height={500}
          objectFit="cover"
          alt="sample"
        />
        <Typography>
          <Label title="MyDiary iOS App" />
          <Text>
            ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。ただの日記アプリ。Rect-Native。Expo.リリースってめっちゃ大変やん。
          </Text>
          <Label title="担当" />
          <Text>
            Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。Expoは便利。制作：自分。全部自分。
          </Text>
        </Typography>
      </Contents>
    </Wrapper>
  )
}

export default Main
