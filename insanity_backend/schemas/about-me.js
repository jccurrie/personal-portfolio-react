export default {
    name: 'about-me',
    title: 'About-me',
    type: 'document',
    fields: [
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'college_name',
            title: 'College_name',
            type: 'string'
        },
        {
            name: 'degree_major',
            title: 'Degree_major',
            type: 'string'
        },
        {
            name: 'degree_minor1',
            title: 'Degree_minor1',
            type: 'string'
        },
        {
            name: 'degree_minor2',
            title: 'Degree_minor2',
            type: 'string'
        },
        {
            name: 'gpa',
            title: 'Gpa',
            type: 'string'
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string'
        }
        ,
        {
            name: 'self_description',
            title: 'Self_description',
            type: 'string'
        },
        {
            name: 'hobbies',
            title: 'Hobbies',
            type: 'string'
        }
    ]
}