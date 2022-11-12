import {TextInput} from '@sanity/ui'
import { groq } from 'next-sanity';
import { useEffect } from 'react';
import {useClient} from 'sanity'

export const Brand = (props) => {
  const client = useClient().withConfig({apiVersion: '2021-10-21'})

  const {elementProps, onChange} = props;


  const query = groq`*[_type == "brand"]`
  console.log({props})
  const handleChange = (event) => {
    return client.fetch(query)
  }
  
  useEffect(() => {
    const brands = client.fetch(query)
    console.log("here", brands)

  }, [])
  return (
    <div>
      Enter
      <TextInput {...elementProps} />
    </div>
  );
}
