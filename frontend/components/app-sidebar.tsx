"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Car,
  CarFront,
  CarTaxiFrontIcon,
  Clock10Icon,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  HelpCircle,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  UserCircle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Meus Veículos",
      url: "/meus-veiculos",
      icon: CarFront,
      isActive: true,
      items: [
        {
          title: "Ativos",
          url: "/meus-veiculos/ativos",
        },
        {
          title: "Histórico",
          url: "/meus-veiculos/historico",
        },
        {
          title: "Agendamentos",
          url: "/meus-veiculos/agendamentos",
        },
      ],
    },
    {
      title: "Catálogo",
      url: "/catalogo",
      icon: Car,
      items: [
        {
          title: "Todos os Veículos",
          url: "/catalogo",
        },
        {
          title: "Carros Populares",
          url: "/catalogo/populares",
        },
        {
          title: "SUVs & Executivos",
          url: "/catalogo/suvs",
        },
      ],
    },
    {
      title: "Minhas Reservas",
      url: "/reservas",
      icon: Clock10Icon,
    },
    {
      title: "Pagamentos",
      url: "/pagamentos",
      icon: CreditCard,
      items: [
        {
          title: "Faturas",
          url: "/pagamentos/faturas",
        },
        {
          title: "Métodos de Pagamento",
          url: "/pagamentos/metodos",
        },
      ],
    },
    {
      title: "Suporte",
      url: "/suporte",
      icon: HelpCircle,
      items: [
        {
          title: "FAQ",
          url: "/suporte/faq",
        },
        {
          title: "Fale Conosco",
          url: "/suporte/contato",
        },
      ],
    },
    {
      title: "Conta",
      url: "/conta",
      icon: UserCircle,
      items: [
        {
          title: "Meus Dados",
          url: "/conta/dados",
        },
        {
          title: "Segurança",
          url: "/conta/seguranca",
        },
        {
          title: "Sair",
          url: "/logout",
        },
      ],
    },
  ]

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
