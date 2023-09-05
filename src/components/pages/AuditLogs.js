import React, { useState } from 'react';
import AccessLog from '../tabs/auditLogTabs/AccessLog';
import ActivityLog from '../tabs/auditLogTabs/ActivityLog';

const AuditLogs = () => {
    const tabData = [
        { id: 1, label: 'Access Log' },
        { id: 2, label: 'Activity Log' },
      ];

    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className='customers-container'>
                <div className='top-bar'>
                    <div className="heading-container">
                        <h1>Audit Logs</h1>
                        <div className="tabs-container">
                            {tabData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
                                    onClick={() => handleTabChange(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='table'>
                    {activeTab === 1 && <AccessLog />}
                    {activeTab === 2 && <ActivityLog />}
                </div>
            </div>
            <style jsx>
                {`
                    .customers-container {
                        display: block;
                        background-color: #fff;
                        width: 989px;
                        height: 826px;
                        position: relative;
                        left: 20px;
                        top: -50px;
                        border-radius: 6px;
                    }

                    .top-bar {
                        display: flex;
                        height: 100px;
                        width: 100%;
                        border-radius: 6px 6px 0 0;
                    }

                    .heading-container {
                        width: 50%;
                        padding-left: 0px;
                    }

                    .heading-container h1 {
                        font-size: 24px;
                        color: #595959;
                        font-weight: 600;
                        padding: 20px 0 0 50px;
                    }

                    .tabs-container {
                        display: flex;
                        width: 940px;
                        padding: 20px 0 0 50px;
                        border-bottom: 1px solid #CDCDCD;
                    }

                    .tab {
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 400;
                        color: #595959;
                        margin-right: 20px;
                    }


                    .active-tab {
                        border-bottom: 3px solid  #595959;
                        
                    }

                    .table {
                        position: relative;
                        top: 20px;
                        left: 30px;
                    }

                    .active-requests-table{
                width: 990px;
                height: 489px;
                position: relative;
                top: 40px;
                left: -30px;
                border-bottom: 1px solid #CDCDCD ;
                padding-bottom: 30px;
            }

            .active-requests-table th{
                color: #595959;
                font-size: 14px;
                font-weight: 600;
                text-align: left;
                width: 5%;
                position: relative;
                top: -15px;
                left: 50px;
            
            }

            .active-requests-table td{
                color: #595959;
                font-size: 14px;
                font-weight: 400;
                padding: 18.5px 0px 0 0px;
                position: relative;
                left: 50px;

            }

            .row-line {
                border-bottom: 1px solid #CDCDCD;
                position: absolute;
                margin-top: 3px;
                left: -1px;
                width: 990px;
            }

                `}
            </style>
        </div>
    );
}

export default AuditLogs;
