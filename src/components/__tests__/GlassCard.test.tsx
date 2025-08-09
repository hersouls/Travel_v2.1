// import React from 'react'; // Not needed in React 18+
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GlassCard } from '../GlassCard';

describe('GlassCard', () => {
  describe('기본 렌더링', () => {
    it('기본 props로 렌더링되어야 한다', () => {
      render(
        <GlassCard>
          <div>Test Content</div>
        </GlassCard>
      );
      
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('children이 올바르게 렌더링되어야 한다', () => {
      render(
        <GlassCard>
          <p>Hello World</p>
          <button>Click me</button>
        </GlassCard>
      );
      
      expect(screen.getByText('Hello World')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });
  });

  describe('Variant 속성', () => {
    it('travel variant가 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard variant="travel">Travel Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-gradient-to-br');
      expect(card).toHaveClass('from-primary-500/10');
      expect(card).toHaveClass('backdrop-blur-lg');
    });

    it('light variant가 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard variant="light">Light Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-glass-light');
      expect(card).toHaveClass('backdrop-blur-sm');
    });

    it('strong variant가 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard variant="strong">Strong Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-glass-strong');
      expect(card).toHaveClass('backdrop-blur-xl');
    });

    it('default variant가 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard>Default Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-glass-light');
      expect(card).toHaveClass('backdrop-blur-md');
    });
  });

  describe('상호작용', () => {
    it('hoverable이 true일 때 호버 효과가 있어야 한다', () => {
      const { container } = render(
        <GlassCard hoverable>Hoverable Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('hover:bg-white/15');
      expect(card).toHaveClass('transition-all');
      expect(card).toHaveClass('duration-300');
    });

    it('hoverable이 false일 때 호버 효과가 없어야 한다', () => {
      const { container } = render(
        <GlassCard hoverable={false}>Non-Hoverable Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass('hover:bg-white/15');
      expect(card).not.toHaveClass('transition-all');
    });

    it('onClick 이벤트가 작동해야 한다', () => {
      const handleClick = jest.fn();
      
      render(
        <GlassCard onClick={handleClick}>
          Clickable Card
        </GlassCard>
      );
      
      const card = screen.getByText('Clickable Card').closest('div')!;
      fireEvent.click(card);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('onClick이 있을 때 role과 tabIndex가 설정되어야 한다', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <GlassCard onClick={handleClick}>
          Clickable Card
        </GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveAttribute('role', 'button');
      expect(card).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('웨이브 효과', () => {
    it('withWaveEffect가 true일 때 웨이브 요소가 추가되어야 한다', () => {
      const { container } = render(
        <GlassCard withWaveEffect>
          Wave Card
        </GlassCard>
      );
      
      // 웨이브 효과 요소 확인 - wave-animation 클래스 사용
      const waveElements = container.querySelectorAll('.wave-animation');
      expect(waveElements.length).toBe(2); // 상단과 하단 웨이브
    });

    it('withWaveEffect가 false일 때 웨이브 요소가 없어야 한다', () => {
      const { container } = render(
        <GlassCard withWaveEffect={false}>
          No Wave Card
        </GlassCard>
      );
      
      const waveElements = container.querySelectorAll('.wave-animation');
      expect(waveElements.length).toBe(0);
    });
  });

  describe('커스텀 클래스', () => {
    it('추가 className이 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard className="custom-class">
          Custom Card
        </GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-class');
    });

    it('기본 클래스와 커스텀 클래스가 모두 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard className="custom-class" variant="travel">
          Custom Travel Card
        </GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-class');
      expect(card).toHaveClass('backdrop-blur-lg');
      expect(card).toHaveClass('bg-gradient-to-br');
    });
  });

  describe('접근성', () => {
    it('role이 올바르게 설정되어야 한다', () => {
      render(
        <GlassCard role="region" aria-label="Test Card">
          Accessible Card
        </GlassCard>
      );
      
      const card = screen.getByRole('region');
      expect(card).toHaveAttribute('aria-label', 'Test Card');
    });
  });

  describe('스타일링', () => {
    it('기본 글래스 모피즘 스타일이 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard>Glass Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('backdrop-blur-md');
      expect(card).toHaveClass('border');
      expect(card).toHaveClass('border-white/20');
      expect(card).toHaveClass('rounded-2xl');
    });

    it('그림자 효과가 적용되어야 한다', () => {
      const { container } = render(
        <GlassCard>Shadow Card</GlassCard>
      );
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('shadow-lg');
    });
  });
});