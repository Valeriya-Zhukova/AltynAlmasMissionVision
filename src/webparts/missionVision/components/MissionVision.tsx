import * as React from 'react';
import styles from './MissionVision.module.scss';
import { IMissionVisionProps } from './IMissionVisionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { TextField } from 'office-ui-fabric-react';

export default class MissionVision extends React.Component<IMissionVisionProps, {}> {
	public render(): React.ReactElement<IMissionVisionProps> {
		return (
			<div className={styles.missionVision}>
				<div className={styles.container}>
					<div className={styles.statement}>
						<div className={styles.mission}>
							<div className={styles.title}>
								<div className={styles.statementIcon}>
									<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/iconMission.png' />
								</div>
								<h2>Миссия</h2>
							</div>
							<div className={styles.text}>
								Мы преобразуем потенциал недр в <span className={styles.gold}>ЗОЛОТЫЕ</span> возможности для общества,
								работников, инвесторов и других заинтересованных сторон.
							</div>
						</div>
						<div className={styles.vision}>
							<div className={styles.title}>
								<div className={styles.statementIcon}>
									<img
										src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/iconVision.png'
										alt='Vision icon'
									/>
								</div>
								<h2>Видение</h2>
							</div>
							<div className={styles.text}>
								Стать лидирующей компанией в среднеазиатском золотодобывающем секторе. Приоритетной географией интересов
								компании является Казахстан.
							</div>
						</div>
					</div>
					<div className={styles.diagram}>
						<div className={`${styles.row} ${styles.header}`}>
							<div className={styles.column}>
								<div className={styles.columnWrapper}>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/growth.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Бизнестің дамуы</div>
										<div>Рост бизнеса</div>
									</div>
								</div>
							</div>
							<div className={styles.column}>
								<div className={styles.columnWrapper}>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/team.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Команда</div>
										<div>Команда</div>
									</div>
								</div>
							</div>
							<div className={styles.column}>
								<div className={styles.columnWrapper}>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/people.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Адамдар</div>
										<div>Люди</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper} ${styles.border}`}>
									<div className={styles.dot}></div>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/innovation.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Инновациялар</div>
										<div>Инновации</div>
									</div>
								</div>
							</div>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper} ${styles.border}  ${styles.last}`}>
									<div className={styles.dot}></div>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/coop.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Ынтымақтастық</div>
										<div>Сотрудничество</div>
									</div>
								</div>
							</div>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper} ${styles.border}`}>
									<div className={styles.dot}></div>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/prof.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Кәсіби шеберлік</div>
										<div>Профессионализм</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper} ${styles.border} ${styles.last}`}>
									<div className={styles.dot}></div>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/dev.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Тұрақты даму</div>
										<div>Устойчивое развитие</div>
									</div>
								</div>
							</div>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper}`}></div>
							</div>
							<div className={styles.column}>
								<div className={`${styles.columnWrapper} ${styles.border} ${styles.last}`}>
									<div className={styles.dot}></div>
									<div className={styles.itemIcon}>
										<img src='https://altynalmaskz.sharepoint.com/SiteAssets/Dev/MissionVision/safety.png' alt='' />
									</div>
									<div className={styles.itemText}>
										<div>Қауіпсіздік</div>
										<div>Безопасность</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
