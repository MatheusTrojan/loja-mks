import { RotatingLines } from  'react-loader-spinner'
import { SkeletonCard, SkeletonList } from './styles';

export default function SkeletonEffect() {

    const numberOfCards: any[] = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <SkeletonList>
            {numberOfCards.map(() => {
                return (
                    <SkeletonCard>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                        <h3>CARREGANDO</h3>
                    </SkeletonCard>
                )
            })}
        </SkeletonList>
    )
}
