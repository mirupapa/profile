export type Skill = {
  id: string
  point: string
  remark: string
}

export const isSkill = (arg: unknown): arg is Skill => {
  const _arg = arg as Skill
  return (
    typeof _arg?.id === 'string' &&
    typeof _arg?.point === 'string' &&
    typeof _arg?.remark === 'string'
  )
}

// 配列のうち1つでもfalseがあればfalseになる
export const isSkills = (args: unknown[]): args is Skill[] =>
  !args.some((arg) => !isSkill(arg))
