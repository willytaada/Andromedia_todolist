import Header from 'src/components/header'
import { page } from 'web-init'
import List from 'src/components/list'
import { useState } from 'react'

export default page({
  url: '/todolist',
  layout: 'blank',
  component: ({}) => {
    const [refresh, setRefresh] = useState(true)
    const changeRefresh = (status) => {
      setRefresh(status)
    }

    return (
        <div>
            <Header changeRefresh={changeRefresh} /> 
            <List refresh={refresh} changeRefresh={changeRefresh} />
        </div>
    )
  },
})
