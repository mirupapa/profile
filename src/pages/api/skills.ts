// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ky from 'ky'
import { isSkills, Skill } from 'types/skill'

// cors対応のためnext/api経由
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill[]>
) {
  const result = await ky
    .get(process.env.NEXT_PUBLIC_SKILL_API_URL, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_SKILL_API_KEY,
      },
    })
    .json()
  const skills = (result as any).Items
  if (isSkills(skills)) {
    res.status(200).send(skills)
  } else {
    throw new Error('error')
  }
}
