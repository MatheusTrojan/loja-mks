import { RotatingLines } from  'react-loader-spinner'
import { SkeletonCard, SkeletonList } from './styles';

export default function SkeletonEffect() {

    const numberOfCards: any[] = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <SkeletonList>
            {numberOfCards.map((i) => {
                return (
                    <SkeletonCard key={i}>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </SkeletonCard>
                )
            })}
        </SkeletonList>
    )
}
