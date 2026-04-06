import { Twitter, Linkedin, Github, Dribbble } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '@components/common/SectionTitle'
import ScrollReveal from '@components/common/ScrollReveal'
import { team } from '@data/content'
import { staggerContainer, staggerItem } from '@utils/motion'

const socialIconMap = { twitter: Twitter, linkedin: Linkedin, github: Github, dribbble: Dribbble }

export default function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <ScrollReveal className="mb-16">
          <SectionTitle
            eyebrow="The team"
            title={<>The minds behind the <span className="text-gradient italic">magic</span></>}
            subtitle="A tight-knit group of strategists, designers, engineers, and marketers who care deeply about their craft."
          />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              className="group text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-5">
                <motion.img
                  src={member.avatar}
                  alt={member.name}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-soft-lg group-hover:ring-brand-200 dark:group-hover:ring-brand-800 transition-all duration-300"
                  loading="lazy"
                />
                {/* Social overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 rounded-full bg-brand-500/80 flex items-center justify-center gap-2"
                >
                  {Object.entries(member.social).map(([platform, href]) => {
                    const Icon = socialIconMap[platform]
                    return Icon ? (
                      <a key={platform} href={href} target="_blank" rel="noopener noreferrer"
                        className="text-white hover:text-brand-200 transition-colors" aria-label={platform}
                        onClick={e => e.stopPropagation()}>
                        <Icon size={16} />
                      </a>
                    ) : null
                  })}
                </motion.div>
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-medium text-brand-500 mb-2">{member.role}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[200px] mx-auto leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
