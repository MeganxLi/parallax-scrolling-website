import { useEffect, useState } from 'react'

import {
  LoadingBlack, LoadingPage, ProgressBar, Bar, BarText, LoadingImg,
} from '../../styled/pages/Loading'

interface Props {
  switchPage: (finish: boolean) => void;
}

const Loading = ({ switchPage }: Props) => {
  const [loadingTime, setLoadingTime] = useState<number>(0)
  const finish = loadingTime !== 100

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingTime((prevProgress) => prevProgress + 70)
    }, 300)

    if (loadingTime >= 100) {
      setLoadingTime(100)
      switchPage(true)
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [loadingTime])

  return (
    <LoadingPage>
      <LoadingBlack>
        <LoadingImg src={`./images/${finish ? 'caterpillar' : 'butter-fly'}.png`} alt="loading img" move={loadingTime} />
        <ProgressBar>
          <Bar move={loadingTime} />
        </ProgressBar>
        <BarText>{finish ? 'loading...' : 'complete'}</BarText>
      </LoadingBlack>
    </LoadingPage>
  )
}

export default Loading
