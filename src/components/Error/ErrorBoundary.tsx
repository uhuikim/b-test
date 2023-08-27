import React from 'react'

type Props = {
    children: React.ReactNode
}
type State = {
    hasError: boolean
    error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    render() {
        const { children } = this.props
        const { hasError, error } = this.state

        console.log(error)

        if (hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <h1>Something went wrong.{error?.message}</h1>
        }

        return children
    }
}

export default ErrorBoundary
