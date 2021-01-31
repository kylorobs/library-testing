import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { withKnobs, text } from '@storybook/addon-knobs';

const personalGroupId = 'personal info';
const generalGroupId = 'general info';

//VARIABLES
const INSERT_NAME = `${text('name', 'Kylo', personalGroupId)}`
const INSERT_CTA = `${text('cta', 'Click here', generalGroupId)}`
const INSERT_IMAGE = `${text('image', '', generalGroupId)}`
const INSERT_SECOND_LINK= `${text('secondlink', '', generalGroupId)}`

storiesOf('Profile Cards', module)
  .addDecorator(withKnobs)
  .add('Simple', () => `


    <profile-card
        name=" ${INSERT_NAME} "
        cta=" ${INSERT_CTA} "
        image=" ${INSERT_IMAGE} "
        secondlink= " ${INSERT_SECOND_LINK} "
    ></profile-card>



  `, { notes }, );



//   export const template = `

//     <profile-card>
//         name="  {INSERT NAME HERE}"

//     </profile-card>
    
//   `