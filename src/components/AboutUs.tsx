import { useMemo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GlassCard } from './GlassCard';
import { WaveButton } from './WaveButton';
import { WaveBackground } from './WaveBackground';
import {
  Heart,
  Brain,
  Rocket,
  Crown,
  Gift,
  CreditCard,
  Coins,
  Music,
  Globe,
  Zap,
  Target,
  Users,
  Activity,
  TrendingUp,
  Mail,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

export function AboutUs() {
  const services = useMemo(() => [
    {
      name: 'Music Platform',
      url: 'music.moonwave.kr',
      description: 'Moonwave만의 감성음악 제작',
      icon: Music,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Travel Service',
      url: 'travel.moonwave.kr',
      description: 'Moonwave과 함께 세계여행',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Subscription Manager',
      url: 'sub.moonwave.kr',
      description: 'AI 서비스 중심의 구독 관리',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Crypto Trading',
      url: 'btc.moonwave.kr',
      description: 'Moonwave와 함께하는 크립토 매매',
      icon: Coins,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Music Album',
      url: 'oh.moonwave.kr',
      description: '국가대표 오안나 헌정 앨범',
      icon: Gift,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Financial Strategy',
      url: 'financial.moonwave.kr',
      description: 'Moonwave와 함께하는 금융투자 전략',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Kids Platform',
      url: 'lego.moonwave.kr',
      description: '아이들과 함께 Lego 블럭 재사용 조립놀이',
      icon: Crown,
      color: 'from-indigo-500 to-purple-500'
    }
  ], []);

  const values = useMemo(() => [
    {
      title: '자신만의 파동',
      description: '세상의 기준이 아닌, 각자의 고유함을 존중합니다',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '명료한 전략',
      description: '복잡함 속에서 본질을 찾아 단순하게 만듭니다',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '지속적인 혁신',
      description: '멈추지 않되, 자신의 속도로 진화합니다',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: '진정한 파트너십',
      description: '함께 파동을 만들고 흐름을 이어갑니다',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }
  ], []);

  const technologies = useMemo(() => [
    {
      category: 'AI가 만드는 공명',
      items: [
        { name: 'GPT-4, Claude, Gemini', description: '전략적 사고의 파트너' },
        { name: 'SUNO AI', description: '텍스트를 음악의 파동으로' },
        { name: 'Sora', description: '상상을 시각적 파동으로' }
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: '흐름을 만드는 인프라',
      items: [
        { name: 'Supabase, Firebase', description: '실시간으로 흐르는 데이터' },
        { name: 'Vercel', description: '빠르고 안정적인 배포의 흐름' },
        { name: 'Make, n8n', description: '끊김 없는 업무 프로세스' }
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: '전문 AI 서비스',
      items: [
        { name: 'Zenspike', description: '데이터에서 인사이트의 파동을 발견' },
        { name: 'Skywork', description: '복잡한 워크플로우를 자연스러운 흐름으로' },
        { name: 'Perplexcity', description: '스토리텔링에 몰입의 파동을 더하다' }
      ],
      icon: Crown,
      color: 'from-yellow-500 to-orange-500'
    }
  ], []);

  return (
    <div className="min-h-screen relative">
      <WaveBackground />
      <Header />

      <main className="pt-28 pb-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <GlassCard variant="strong" className="p-8">
              <div className="space-y-6">
                {/* Logo and Brand */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="text-white text-2xl" />
                  </div>
                  <div>
                    <h1 className="text-white text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Travel
                    </h1>
                    <p className="text-white text-lg opacity-80 tracking-normal">
                      당신만의 여행 파동과 흐름으로 만드는 여행 경험
                    </p>
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="space-y-4">
                  <blockquote className="text-white text-xl italic leading-relaxed tracking-normal">
                    "세상이 만들어낸 여행 속도는 나의 기준이 될 수 없으며,<br />
                    타인의 여행은 나의 여행을 설명할 수 없다.<br />
                    나는 오직 나만의 여행 파동으로, 나만의 여행 흐름으로 존재한다."
                  </blockquote>
                  <p className="text-white text-sm opacity-60 tracking-normal">
                    Travel은 이 철학에서 시작되었습니다.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* About Moonwave 전문 Section */}
          <div className="space-y-6">
            <GlassCard variant="light" className="p-8">
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    About Travel
                  </h2>
                  <p className="text-white text-lg opacity-80 tracking-normal">
                    Travel의 철학과 가치에 대해 더 자세히 알아보세요
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-white text-base opacity-90 leading-relaxed tracking-normal">
                    Travel은 세상의 기준이 아닌, 각자의 고유한 여행 파동과 흐름으로 움직이는 여행 경험을 만들어갑니다.
                  </p>
                  <p className="text-white text-sm opacity-60 tracking-normal">
                    Footer의 "About Travel" 링크를 클릭하여 더 자세한 정보를 확인하세요.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Philosophy Section */}
          <div className="space-y-6">
            <GlassCard variant="light" className="p-6">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Philosophy: 여행 파동(Wave)과 흐름(Flow)
                  </h2>
                  <p className="text-white text-lg opacity-80 tracking-normal">
                    우리가 믿는 것
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 p-6 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Zap className="text-white text-xl" />
                      </div>
                      <h3 className="text-white text-xl font-semibold">여행 파동(Wave)</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed tracking-normal">
                      각자가 가진 고유한 여행 철학과 감성의 진동입니다. 이는 남과 비교할 수 없는, 오직 자신만의 여행 방식입니다.
                    </p>
                  </div>

                  <div className="space-y-4 p-6 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Activity className="text-white text-xl" />
                      </div>
                      <h3 className="text-white text-xl font-semibold">여행 흐름(Flow)</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed tracking-normal">
                      그 파동을 현실에서 실현하는 여행 전략과 실행의 연결입니다. 끊임없이 움직이되, 자신만의 속도로 흐르는 여행입니다.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Values Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Values: 우리가 지키는 것
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard 
                  key={value.title + '-' + index}
                  variant="light" 
                  className="p-6"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    contain: 'layout style paint'
                  }}
                >
                  <div className="space-y-4 text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mx-auto bg-gradient-to-r ${value.color}`}>
                      <value.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">{value.title}</h3>
                    <p className="text-white text-sm opacity-80 leading-relaxed tracking-normal">
                      {value.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Projects: 파동이 만드는 디지털 경험
              </h2>
              <p className="text-white text-lg opacity-80 tracking-normal mt-3">
                우리가 만들어가는 고유한 서비스들
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <GlassCard 
                  key={service.name + '-' + index}
                  variant="light" 
                  className="p-6"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    contain: 'layout style paint'
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="text-white text-xl" />
                      </div>
                      <ExternalLink className="text-white/60 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">{service.name}</h3>
                      <p className="text-white text-sm opacity-80 leading-relaxed tracking-normal mb-3">
                        {service.description}
                      </p>
                      <p className="text-primary-400 text-xs font-medium tracking-normal">
                        {service.url}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Technology: 파동을 실현하는 도구들
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <GlassCard 
                  key={tech.category + '-' + index}
                  variant="light" 
                  className="p-6"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    contain: 'layout style paint'
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${tech.color}`}>
                        <tech.icon className="text-white text-lg" />
                      </div>
                      <h3 className="text-white text-lg font-semibold">{tech.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {tech.items.map((item, itemIndex) => (
                        <div key={item.name + '-' + itemIndex} className="p-3 bg-white/5 rounded-lg">
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-white text-xs opacity-70 tracking-normal">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <GlassCard variant="strong" className="p-8">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Join the Travel Wave
                  </h2>
                  <p className="text-white text-lg opacity-80 tracking-normal mt-3">
                    당신만의 여행 파동을 찾고 계신가요?
                  </p>
                </div>

                <div className="space-y-4">
                  <blockquote className="text-white text-xl italic leading-relaxed tracking-normal">
                    "여행의 속도는 순간의 환호를 가져올지 모르나<br />
                    여행 파동과 흐름은 진정한 여행 경험을 가져온다."
                  </blockquote>
                  <p className="text-white text-base opacity-80 tracking-normal">
                    Travel은 당신이 세상의 여행 속도에 휩쓸리지 않고, 자신만의 여행 파동과 흐름을 만들 수 있도록 돕습니다.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <WaveButton
                    variant="primary"
                    onClick={() => window.location.href = 'mailto:deasoung@gmail.com'}
                    className="px-6 py-3"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Travel
                  </WaveButton>
                  
                  <WaveButton
                    variant="secondary"
                    onClick={() => window.open('https://www.moonwave.kr', '_blank')}
                    className="px-6 py-3"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit Website
                  </WaveButton>
                </div>

                <div className="text-center space-y-3">
                  <p className="text-white text-sm opacity-60 tracking-normal">
                    Travel HQ
                  </p>
                  <p className="text-white text-sm opacity-80 tracking-normal">
                    전략적 디지털 여행실에서 당신의 여행 파동을 기다립니다.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Back to Home */}
          <div className="flex justify-center">
            <WaveButton
              variant="ghost"
              onClick={() => window.history.back()}
              className="px-6 py-3"
            >
              <ArrowLeft className="w-5 h-5" />
              뒤로 가기
            </WaveButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 