import { useEffect, useState } from 'react'

import {
  LoadingBlack, LoadingPage, ProgressBar, Bar, BarText,
} from '../../styled/pages/Loading'

const Loading = () => {
  const [loadingTime, setLoadingTime] = useState<number>(0)

  useEffect(() => {
    const handleLoad = () => {
      const time = new Date().getTime() - window.performance.timing.navigationStart
      setLoadingTime(time)
    }

    window.addEventListener('load', handleLoad)

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <LoadingPage>
      <LoadingBlack>
        <img src="./images/Caterpillar.png" alt="loading img" />
        {loadingTime}
        <ProgressBar>
          <Bar />
        </ProgressBar>
        <BarText>Complete</BarText>
      </LoadingBlack>
    </LoadingPage>
  )
}

export default Loading
