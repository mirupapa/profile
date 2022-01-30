import Work from 'components/molecule/Work'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { loadingData } from '../home/Works'

const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 100px 30px;
`
const Contents = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`

const Links: React.FC = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <Contents>
        {loadingData
          .filter((data) => data.url !== router.query.work)
          .map((data) => {
            return (
              <Link href={`/works/${data.mainTitle}`} key={data.mainTitle}>
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

export default Links
