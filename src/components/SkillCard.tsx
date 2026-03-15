import { TechIcons } from '../lib/TechIcons';
import type { TechIconId } from '../types/TechIconId';
import type { SkillCardProps } from '../types/SkillCardsProps';

const SkillCard = ({ stack, className = '' }: SkillCardProps) => {
	return (
		<div
			className={`p-[1px] rounded-xl bg-gradient-to-r from-[#6366F1] via-[#A78BFA] via-[#3b82f6] to-[#22d3ee] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite] ${className}`}
		>
			<div
				className={`w-full h-full bg-[#1f1f1f] rounded-xl px-6 py-4 text-center`}
			>
				<h3 className="font-semibold mb-4 text-2xl">{stack.label}</h3>

				<div className="flex flex-wrap items-center justify-center h-[calc(100%-56px)] gap-x-6 gap-y-4">
					{stack.skills?.map((skill: TechIconId) => {
						const { icon: Icon, color, label } = TechIcons[skill];

						return (
							<div
								key={skill}
								className="flex flex-col items-center justify-center gap-2 w-16 text-center"
							>
								{Icon ? (
									<Icon
										color={color}
										size={32}
									/>
								) : (
									<img
										src="/icons/azuredevops.svg"
										className="w-8 h-8"
									/>
								)}
								<p className="text-sm tracking-tight text-nowrap">
									{label}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
