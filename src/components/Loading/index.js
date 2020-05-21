import React from 'react';
import Lottie from 'react-lottie';

import loading from '../../assets/animations/loading.json';
import { Container } from './styles';

export default function Loading() {
  const AnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <Lottie options={AnimationConfig} width={250} height={250} />
    </Container>
  );
}
