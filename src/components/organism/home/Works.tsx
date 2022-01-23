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

const loadingData = [
  {
    imgPath: '/mydiary.png',
    imgAlt: 'myDiary',
    mainTitle: 'MyDiary',
    subTitle: 'Coding / React Native',
  },
  {
    imgPath: '/dummy.png',
    imgAlt: 'Dummy1',
    mainTitle: 'Dummy1',
    subTitle: 'Coding / React',
  },
  {
    imgPath: '/dummy.png',
    imgAlt: 'Dummy2',
    mainTitle: 'Dummy2',
    subTitle: 'Coding / JAVA',
  },
]

const Works: React.FC = () => {
  return (
    <Wrapper>
      <AreaTitle mainTitle="WORKS" subTitle="制作実績など" />
      <Contents>
        {loadingData.map((data) => {
          return (
            <Link href={`/works/${data.mainTitle}`} key={data.mainTitle}>
              <a>
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
