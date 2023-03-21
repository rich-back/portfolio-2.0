export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'skillImage',
      title: 'SkillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
