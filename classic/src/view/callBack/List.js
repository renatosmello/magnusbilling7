/**
 * Classe que define a lista de "CallBack"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('MBilling.view.callBack.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.callbacklist',
    store: 'CallBack',
    initComponent: function() {
        var me = this;
        me.allowPrint = false;
        me.buttonCsv = true;
        me.buttonUpdateLot = false;
        me.extraButtons = [{
            text: t('Reprocess'),
            iconCls: 'call',
            handler: 'onReative'
        }];
        me.columns = [{
            header: t('Id'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('user'),
            dataIndex: 'idUserusername',
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Did'),
            dataIndex: 'idDiddid',
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('destinationnumber'),
            dataIndex: 'exten',
            flex: 4
        }, {
            header: t('status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleancallback,
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('active')],
                    [2, t('pending')],
                    [3, t('sent')],
                    [4, t('Not working')],
                    [5, t('Complete')]
                ]
            }
        }, {
            header: t('Num attempt'),
            dataIndex: 'num_attempt',
            flex: 2
        }, {
            header: t('Last attempt'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'last_attempt_time',
            flex: 4
        }, {
            header: t('sessiontime'),
            dataIndex: 'sessiontime',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 3
        }, {
            header: t('Created'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'entry_time',
            flex: 4
        }];
        me.callParent(arguments);
    }
});