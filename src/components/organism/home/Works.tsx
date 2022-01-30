import AreaTitle from 'components/atom/AreaTitle'
import Work from 'components/molecule/Work'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  height: 800px;
  padding-top: 120px;
`
const Contents = styled.div`
  display: flex;
  width: 885px;
  margin: 0 auto;
  justify-content: space-between;
`

type Data = {
  imgPath: string
  imgAlt: string
  mainTitle: string
  subTitle: string
  url: string
}

export const loadingData: Data[] = [
  {
    imgPath: '/mydiary.png',
    imgAlt: 'myDiary',
    mainTitle: 'MyDiary',
    subTitle: 'Coding / React Native',
    url: 'mydiary',
  },
  {
    imgPath: '/dummy.png',
    imgAlt: 'Dummy1',
    mainTitle: 'Dummy1',
    subTitle: 'Coding / React',
    url: 'dummy1',
  },
  {
    imgPath: '/dummy.png',
    imgAlt: 'Dummy2',
    mainTitle: 'Dummy2',
    subTitle: 'Coding / JAVA',
    url: 'dummy2',
  },
]

const Works: React.FC = () => {
  return (
    <Wrapper>
      <AreaTitle mainTitle="WORKS" subTitle="制作実績など" />
      <Contents>
        {loadingData.map((data) => {
          return (
            <Link href={`/works/${data.url}`} key={data.mainTitle}>
              <a style={{ cursor: 'pointer' }}>
                <Work
                  imgPath={data.imgPath}
                  imgAlt={data.imgAlt}
                  mainTitle={data.mainTitle}
                  subTitle={data.subTitle}
                />
              </a>
            </Link>
          )
        })}
      </Contents>
    </Wrapper>
  )
}

export default Works
