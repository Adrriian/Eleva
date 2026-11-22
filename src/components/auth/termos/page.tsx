'use client'

import TrueTerm from "@/components/Inputs/ComponentTrueTerm"
import ThemeToggle from "@/components/theme/BtnChangeMode"
import { useTheme } from "@/contexts/themeMode"
import { CalendarDays, FileSpreadsheet, Moon, Sun } from "lucide-react"
import { trueTerm } from "./functions/trueTerm"
import { useRouter } from "next/navigation";

export default function PageComponentTermo() {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <div className="w-screen h-screen flex flex-col  ">
            <div className="w-screen flex justify-between bg-bordo-escuro p-3">
                <div className=" flex gap-2 ">
                    <img src="/assests/logo/logo3.svg" className="w-10" />
                    <h1 className="text-4xl text-texto-terceiro">Eleva</h1>
                </div>
                <div className="flex  items-center rounded-full">
                    <ThemeToggle />
                </div>
            </div>
            <div className="h-full overflow-x-hidden flex justify-center px-6 py-3 ">
                <div className="gap-7 rounded-xl overflow-y-scroll p-3 bg-fundo-principal flex flex-col lg:w-4xl">
                    <div className="flex flex-col items-center justify-center gap-3 border-b-2 border-fundo-secundario">
                        <FileSpreadsheet size={80} className="text-bordo-vibrante" />
                        <h1 className="text-xl text-texto-quarto font-bold">TERMOS DE SERVIÇO</h1>
                        <h1 className="text-xs text-center text-texto-principal">Por favor, leia atentamente nossos termos de serviço antes de continuar</h1>
                        <div className="border-b-2 border-fundo-secundario"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays className="text-texto-quarto" />
                        <h1 className="text-xs text-texto-quarto">Última atualização: 22 de novembro de 2026</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">1. Sobre o Eleva</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O Eleva é uma plataforma digital de organização e gestão financeira pessoal que oferece recursos para:</span>
                            <ul className="pl-6 flex flex-col gap-1">
                                <li className="list-disc marker:text-texto-quarto text-xs">Cadastro e acompanhamento de receitas e despesas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Controle de cartões de crédito e faturas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Criação e acompanhamento de orçamentos.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Definição de metas e objetivos financeiros.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Registro e acompanhamento de investimentos.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Controle e visualização do patrimônio pessoal.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Geração de gráficos, relatórios e indicadores financeiros.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">2. Cadastro e responsabilidade do usuário</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">Para utilizar os recursos do Eleva, o usuário deverá criar uma conta e fornecer informações verdadeiras, completas e atualizadas.</span>
                            <span className="text-texto-principal text-sm">Durante o cadastro, poderão ser solicitadas as seguintes informações:</span>
                            <ul className="pl-6 flex flex-col gap-1">
                                <li className="list-disc marker:text-texto-quarto text-xs">Nome e sobrenome.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Endereço de e-mail.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Número de telefone.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Data de nascimento.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Informações necessárias para autenticação e segurança da conta.</li>
                            </ul>
                            <span className="text-texto-principal text-sm">O usuário é responsável por:</span>
                            <ol className="pl-6 flex flex-col gap-1">
                                <li className="list-decimal marker:text-texto-quarto text-xs">Manter suas informações cadastrais atualizadas.</li>
                                <li className="list-decimal marker:text-texto-quarto text-xs">Proteger suas credenciais de acesso.</li>
                                <li className="list-decimal marker:text-texto-quarto text-xs">Não compartilhar sua conta com terceiros.</li>
                                <li className="list-decimal marker:text-texto-quarto text-xs">Comunicar qualquer acesso não autorizado ou atividade suspeita.</li>
                                <li className="list-decimal marker:text-texto-quarto text-xs">Garantir que as informações financeiras inseridas na plataforma sejam corretas.</li>
                            </ol>
                            <span className="text-texto-principal text-sm">O Eleva poderá suspender ou encerrar contas que apresentem indícios de fraude, utilização indevida ou violação destes termos, respeitando a legislação aplicável.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">3. Utilização da plataforma</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O usuário compromete-se a utilizar o Eleva exclusivamente para finalidades legais e legítimas.</span>
                            <span className="text-texto-principal text-sm">Não é permitido:</span>
                            <ul className="pl-6">
                                <li className="list-disc marker:text-texto-quarto text-xs">Utilizar a plataforma para atividades fraudulentas ou ilícitas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Tentar acessar contas ou informações de outros usuários sem autorização.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Explorar vulnerabilidades ou comprometer a segurança do sistema.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Realizar engenharia reversa ou tentar obter acesso não autorizado ao código-fonte.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Utilizar recursos automatizados para prejudicar o funcionamento da plataforma.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Inserir informações falsas com a intenção de prejudicar terceiros ou o serviço.</li>
                            </ul>
                            <span className="text-texto-principal text-sm">O descumprimento destas condições poderá resultar na suspensão ou encerramento da conta.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">4. Informações financeiras e investimentos</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O Eleva oferece ferramentas para registro, organização e acompanhamento de informações financeiras e investimentos.</span>
                            <span className="text-texto-principal text-sm">É importante esclarecer que:</span>
                            <ul className="pl-6">
                                <li className="list-disc marker:text-texto-quarto text-xs">O Eleva não é uma instituição financeira.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">O Eleva não atua como corretora de valores mobiliários.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">O Eleva não realiza operações de compra ou venda de ativos em nome dos usuários.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">O Eleva não garante rentabilidade ou retorno financeiro.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">As informações e indicadores apresentados possuem finalidade informativa e organizacional.</li>
                            </ul>
                            <span className="text-texto-principal text-sm">Os valores dos investimentos registrados pelo usuário poderão depender de informações inseridas manualmente ou de fontes externas, quando disponíveis.</span>
                            <span className="text-texto-principal text-sm">As cotações, conversões cambiais e estimativas patrimoniais podem apresentar diferenças em relação aos valores efetivamente praticados no mercado.</span>
                            <span className="text-texto-principal text-sm">O usuário é responsável por suas decisões financeiras e de investimento. O Eleva não oferece garantia de resultados nem substitui a orientação de profissionais financeiros devidamente habilitados.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">5. Moedas e conversões</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">A moeda principal de referência da plataforma será o Real brasileiro (BRL).</span>
                            <span className="text-texto-principal text-sm">A plataforma também poderá permitir o registro de investimentos e ativos em outras moedas, incluindo o Dólar americano (USD).</span>
                            <span className="text-texto-principal text-sm">Quando houver conversão entre moedas, os valores poderão utilizar cotações de fontes externas e estarão sujeitos a variações cambiais.</span>
                            <span className="text-texto-principal text-sm">Os valores convertidos possuem finalidade de acompanhamento e organização patrimonial, não representando necessariamente valores de negociação ou liquidação.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">6. Privacidade e proteção de dados</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O Eleva respeita a privacidade dos seus usuários e compromete-se a tratar os dados pessoais de acordo com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).</span>
                            <span className="text-texto-principal text-sm">As informações fornecidas poderão ser utilizadas para:</span>

                            <ul className="pl-6">
                                <li className="list-disc marker:text-texto-quarto text-xs">Criar e administrar contas de usuários.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Disponibilizar as funcionalidades da plataforma.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Armazenar informações financeiras cadastradas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Garantir a segurança e autenticação das contas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Melhorar a experiência e o funcionamento do serviço.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Cumprir obrigações legais e regulatórias, quando aplicáveis.</li>
                            </ul>
                            <span className="text-texto-principal text-sm">O tratamento dos dados pessoais será detalhado na Política de Privacidade do Eleva, documento complementar a estes Termos de Serviço.</span>
                            <span className="text-texto-principal text-sm">O usuário deverá consultar a Política de Privacidade para compreender como seus dados são coletados, utilizados, armazenados e protegidos.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">7. Disponibilidade e funcionamento</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O Eleva buscará manter a plataforma disponível e funcionando adequadamente.</span>
                            <span className="text-texto-principal text-sm">Entretanto, o usuário reconhece que poderão ocorrer:</span>
                            <ul className="pl-6">
                                <li className="list-disc marker:text-texto-quarto text-xs">Manutenções programadas ou emergenciais.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Indisponibilidades temporárias.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Falhas técnicas.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Atualizações de funcionalidades.</li>
                                <li className="list-disc marker:text-texto-quarto text-xs">Interrupções causadas por serviços externos.</li>
                            </ul>
                            <span className="text-texto-principal text-sm">O Eleva não garante disponibilidade ininterrupta da plataforma.</span>
                            <span className="text-texto-principal text-sm">Sempre que possível, serão adotadas medidas para minimizar interrupções e preservar a integridade das informações armazenadas.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">8. Responsabilidades e limitações</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O usuário reconhece que o Eleva é uma ferramenta de organização financeira e que sua utilização depende das informações fornecidas pelo próprio usuário e, quando aplicável, por serviços externos.</span>
                            <span className="text-texto-principal text-sm">O Eleva não se responsabiliza por decisões financeiras tomadas exclusivamente com base nos dados registrados ou apresentados na plataforma.</span>
                            <span className="text-texto-principal text-sm">Também não garante a exatidão de informações provenientes de fontes externas, como cotações, indicadores e conversões cambiais.</span>
                            <span className="text-texto-principal text-sm">Nenhuma disposição destes termos deverá ser interpretada como exclusão de responsabilidades que não possam ser afastadas pela legislação brasileira.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">9. Propriedade intelectual</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">A marca Eleva, sua identidade visual, interface, estrutura, elementos gráficos, código-fonte e demais componentes desenvolvidos para a plataforma são protegidos pela legislação aplicável de propriedade intelectual.</span>
                            <span className="text-texto-principal text-sm">É proibida a reprodução, distribuição, comercialização ou utilização não autorizada desses elementos.</span>
                            <span className="text-texto-principal text-sm">As informações pessoais e financeiras inseridas pelo usuário permanecem relacionadas ao próprio usuário, observados os direitos e as obrigações previstos na legislação.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">10. Encerramento da conta</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O usuário poderá solicitar o encerramento de sua conta a qualquer momento, utilizando os canais disponibilizados pelo Eleva.</span>
                            <span className="text-texto-principal text-sm">O encerramento da conta deverá observar as regras aplicáveis de proteção de dados e eventuais obrigações legais de retenção de informações.</span>
                            <span className="text-texto-principal text-sm">O Eleva também poderá restringir ou encerrar contas em situações de violação destes termos, fraude ou utilização indevida da plataforma, respeitando os direitos do usuário e a legislação vigente.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">11. Alterações nos Termos de Serviço</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">O Eleva poderá atualizar estes Termos de Serviço para refletir mudanças nas funcionalidades, nas operações da plataforma ou na legislação aplicável.</span>
                            <span className="text-texto-principal text-sm">Quando ocorrerem alterações relevantes, os usuários poderão ser comunicados e, quando necessário, convidados a aceitar a nova versão.</span>
                            <span className="text-texto-principal text-sm">A versão vigente dos termos estará disponível para consulta na plataforma.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">12. Legislação aplicável</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil.</span>
                            <span className="text-texto-principal text-sm">Eventuais conflitos relacionados à utilização da plataforma serão tratados conforme a legislação brasileira, respeitadas as regras de competência e proteção do consumidor aplicáveis.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-texto-quarto text-xl">13. Contato</h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-texto-principal text-sm">Caso tenha dúvidas, solicitações ou precise de esclarecimentos relacionados a estes Termos de Serviço, entre em contato pelos canais oficiais do Eleva.</span>
                            <span className="text-texto-principal text-sm">E-mail de contato: financaseleva@gmail.com</span>
                            <span className="text-texto-principal text-sm">Plataforma: Eleva</span>
                        </div>
                    </div>
                    <div className="border-b-2 border-fundo-secundario"></div>
                    <div>
                        <TrueTerm term={() => trueTerm(router, theme)} />
                    </div>
                </div>
            </div>


        </div>
    )
}